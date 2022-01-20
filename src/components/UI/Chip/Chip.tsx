/** React core **/
import React from 'react';

/** Styles **/
import styles from './Chip.module.scss';

type ChipProps = {
  className: string;
  closable?: boolean;
  text: string;
  onClick?: () => void;
  onRemove?: () => void;
};

export const Chip: React.FC<ChipProps> = ({ className, closable, text, onClick, onRemove }) => {
  const clssName = className || '';
  const classes = `${clssName}`.trim();
  const clble = closable ? styles['chip--closable'] : '';
  const chipClasses = `${styles.chip} ${clble}`.trim();

  return (
    <div className={classes}>
      <span className={chipClasses} onClick={onClick}>
        {text}
      </span>
      {closable && (
        <span className={styles.chip__close} onClick={onRemove}>
          x
        </span>
      )}
    </div>
  );
};
