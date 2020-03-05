import React from 'react';

interface RowProps {}

function Row({ children }: React.PropsWithChildren<RowProps>) {
      return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {children}
            </div>
      );
}

export default Row;