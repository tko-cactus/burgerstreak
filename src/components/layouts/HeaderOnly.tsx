import { ReactNode, VFC } from "react";
import { NavigationBar } from "../organisms/NavigationBar";

type Props = {
  children: ReactNode;
};

export const HeaderOnly: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};
