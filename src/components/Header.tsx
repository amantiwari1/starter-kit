import { Header as HeaderMantine } from "@mantine/core";
const Header = () => {
  return (
    <HeaderMantine height={60} p="xs">
      <div className="flex">
        <div className="flex w-[170px] items-center justify-center">
          <div></div>
        </div>

        <div className="flex w-full justify-between">
          <div> </div>

          <div className="flex space-x-5 pr-5"></div>
        </div>
      </div>
    </HeaderMantine>
  );
};

export default Header;
