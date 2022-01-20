/** React core **/
import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => <>{children}</>;
