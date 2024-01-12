import { Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin, RenderEnterFullScreenProps } from "@react-pdf-viewer/full-screen";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

const Test = () => {
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  return (
    <div
      style={{
        /* stylelint-disable-next-line declaration-property-unit-allowed-list */
        border: "1px solid rgb(0 0 0 / 30%)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eee",
          /* stylelint-disable-next-line declaration-property-unit-allowed-list */
          borderBottom: "1px solid rgb(0 0 0 / 10%)",
          display: "flex",
          padding: "4px",
        }}>
        <EnterFullScreen>
          {(props: RenderEnterFullScreenProps) => (
            <button
              style={{
                backgroundColor: "#357edd",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
                padding: "8px",
              }}
              onClick={props.onClick}>
              Enter fullscreen
            </button>
          )}
        </EnterFullScreen>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}>
        <Viewer
          fileUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
          plugins={[fullScreenPluginInstance]}
        />
      </div>
    </div>
  );
};

export default Test;
