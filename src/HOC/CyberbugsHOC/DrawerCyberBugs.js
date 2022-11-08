import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function DrawerCyberBugs() {
  const { visible, ComponentContentDrawer, callBackSubmit, title } =
    useSelector((state) => state.DrawerReducer);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };
  return (
    <>
      <Drawer
        title={title}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        {/**Nội dung thay đổi của drawer */}
        {ComponentContentDrawer}
      </Drawer>
    </>
  );
}
