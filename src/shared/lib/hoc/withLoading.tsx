import React from 'react';

interface WithLoadingProps {
    isLoading: boolean;
}

export const withLoading = <P extends object>(
    Component: React.ComponentType<P>
) => {
    return ({ isLoading, ...props }: WithLoadingProps & P) => {
        if (isLoading) {
            return (
                <div style={{
                    padding: '40px',
                    textAlign: 'center',
                    fontSize: '18px'
                }}>
                    Загрузка данных...
                </div>
            );
        }

        return <Component {...(props as P)} />;
    };
};