import React from 'react';

interface GridProps {}

function Grid({ children }: React.PropsWithChildren<GridProps>) {
      return (
            <div style={{ display: 'flex' }}>
                  {children}
            </div>
      );
}

export default Grid;