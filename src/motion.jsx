import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * Headline that rises in word by word, with a soft blur clearing as it lands.
 * `segments` lets one part of the line take the accent colour:
 *   [{ text: 'I design interfaces, then I ' }, { text: 'build them', accent: true }]
 * `onLoad` animates on mount (hero); otherwise it plays when scrolled into view.
 */
export function RevealText({ as = 'h2', segments, className, onLoad = false, delay = 0, stagger = 0.06 }) {
  const Tag = motion[as];
  const words = [];
  segments.forEach((seg, s) =>
    seg.text
      .split(' ')
      .filter(Boolean)
      .forEach((w, i) => words.push({ w, accent: seg.accent, key: `${s}-${i}` }))
  );

  const container = {
    hidden: {},
    shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { y: '0.5em', opacity: onLoad ? 0 : 0.2, filter: 'blur(8px)' },
    shown: { y: '0em', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
  };
  const trigger = onLoad
    ? { initial: 'hidden', animate: 'shown' }
    : { initial: 'hidden', whileInView: 'shown', viewport: { once: true, amount: 0.6 } };

  return (
    <Tag className={className} variants={container} {...trigger} aria-label={segments.map((s) => s.text).join('')}>
      {words.map(({ w, accent, key }) => (
        <React.Fragment key={key}>
          <span className="word-mask" aria-hidden="true">
            <motion.span className={accent ? 'word accent-word' : 'word'} variants={word}>
              {w}
            </motion.span>
          </span>{' '}
        </React.Fragment>
      ))}
    </Tag>
  );
}

/** Card / project titles: letters roll up one after another. */
export function LetterTitle({ text, as = 'h3', className }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.8 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.025 } } }}
    >
      {text.split(' ').map((w, wi) => (
        <React.Fragment key={wi}>
        <span className="nowrap" aria-hidden="true">
          {[...w].map((ch, i) => (
            <motion.span
              key={i}
              className="letter"
              variants={{
                hidden: { y: '0.6em', opacity: 0.15, rotateX: -60 },
                shown: { y: '0em', opacity: 1, rotateX: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
        {wi < text.split(' ').length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </Tag>
  );
}

/** Generic block that eases up into place when it scrolls into view. */
export function Reveal({ children, delay = 0, y = 32, className, as = 'div', ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0.2, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { ease };
