import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import Grid from "@mui/material/Grid";
import { Image } from "antd";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

function InboxIcon() {
  return null;
}

function SharingItemCard({ itemId, image, title, createdTime, category, description }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <MDBox role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Divider />
    </MDBox>
  );

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={2}
      mb={2}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Image
            width="100%"
            height="150px"
            src={image}
            style={{ borderRadius: "8px" }}
            alt="image"
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <MDBox width="100%" display="flex" flexDirection="column">
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              mb={2}
            >
              <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                {title}
              </MDTypography>

              <MDBox
                display="flex"
                alignItems="center"
                mt={{ xs: 2, sm: 0 }}
                ml={{ xs: -1.5, sm: 0 }}
              >
                <MDBox mr={1}>
                  <MDButton variant="text" color="info">
                    <Icon>edit</Icon>&nbsp;자세히 보기
                  </MDButton>
                </MDBox>
                <MDButton
                  variant="text"
                  color={darkMode ? "white" : "dark"}
                  onClick={toggleDrawer(true)}
                >
                  <Icon>group</Icon>&nbsp;신청자 보기
                </MDButton>
                <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
                  {list()}
                </Drawer>
              </MDBox>
            </MDBox>
            <MDBox mb={1} lineHeight={0}>
              <MDTypography variant="caption" fontWeight="regular" color="text">
                게시일:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                  {createdTime}
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mb={1} lineHeight={0}>
              <MDTypography variant="caption" fontWeight="regular" color="text">
                테그:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium">
                  {category}
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDTypography variant="caption" fontWeight="regular" color="text">
              내용:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium">
                {description}
              </MDTypography>
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

SharingItemCard.defaultProps = {
  noGutter: false,
};

SharingItemCard.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
};

export default SharingItemCard;
