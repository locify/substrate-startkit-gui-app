import React, { CSSProperties } from 'react';
import { IGraphNodeOptionsProps } from './graphNodeOptions.types';
import styles from './graphNodeOptions.module.scss';
import { calculateGraphNodeLeftPosition, calculateGraphNodeTopPosition } from '../../../shared/utils/graph.util';
import { ReactComponent as IconInfoSvg } from '../../../shared/assets/icon_info.svg';
import { ReactComponent as IconTrashSvg } from '../../../shared/assets/icon_trash.svg';
import { classes } from '../../../shared/utils/styles.util';

const GraphNodeOptions: React.FC<IGraphNodeOptionsProps> = (props) => {

  const {
    scale,
    height,
    width,
    position,
    nodeId
  } = props;

  if (!position || !nodeId) {
    return null;
  }

  const containerComputedStyles: CSSProperties = {
    width: width * scale,
    height: height * scale,
    left: calculateGraphNodeLeftPosition(position.x, scale),
    top: calculateGraphNodeTopPosition(position.y)
  }

  const btnCalculatedStyles = {
    width: 30 * scale,
    height: 30 * scale,
    padding: 7 * scale
  }

  return (
    <div
      key={nodeId}
      className={styles.graphNodeOptions}
      style={containerComputedStyles}
    >
      <div
        className={styles.hoverSidebar}
        style={{ width: 6 * scale }}
      />
      <div className='d-flex align-items-center justify-content-center flex-grow-1 overflow-hidden'>
        <button
          className={classes(styles.optionButton)}
          style={{
            ...btnCalculatedStyles,
            marginRight: 16 * scale
          }}
        >
          <IconInfoSvg width='100%' height='100%'/>
        </button>
        <button
          className={classes(styles.optionButton)}
          style={btnCalculatedStyles}
        >
          <IconTrashSvg width='100%' height='100%'/>
        </button>
      </div>
    </div>
  )
}

export default GraphNodeOptions;
