import React from 'react';

interface ColumnProps {}

function Column({ children }: React.PropsWithChildren<ColumnProps>) {
      return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {children}
            </div>
      );
}

export default Column;