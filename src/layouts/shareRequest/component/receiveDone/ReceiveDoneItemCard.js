import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import MDButton from "../../../../components/MDButton";
import { useMaterialUIController } from "../../../../context";
import Grid from "@mui/material/Grid";
import { Image } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../apis/axios";

function ReceiveDoneItemCard({
  itemId,
  image,
  title,
  createdTime,
  updatedTime,
  category,
  description,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [isOpen, setIsOpen] = useState(false);
  const [applicantList, setApplicantList] = useState([]);

  const getApplicant = (itemId) => {
    setIsOpen(true);
    axiosInstance.get(`/api/history/${itemId}`).then((res) => {
      setApplicantList(res.data);
    });
    console.log(applicantList);
  };

  const onClose = () => {
    setIsOpen(false);
  };

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
            height="200px"
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
              <MDTypography variant="h5" fontWeight="bold" textTransform="capitalize">
                {title}
              </MDTypography>
              <MDBox
                display="flex"
                alignItems="center"
                mt={{ xs: 2, sm: 0 }}
                ml={{ xs: -1.5, sm: 0 }}
              >
                <MDButton
                  component={Link}
                  to={`/share-history/${itemId}`}
                  variant="text"
                  color="info"
                >
                  <Icon>edit</Icon>&nbsp;자세히 보기
                </MDButton>
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
                거래 완료일:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                  {updatedTime.substring(0, 10)}
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

ReceiveDoneItemCard.defaultProps = {
  noGutter: false,
};

ReceiveDoneItemCard.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
  updatedTime: PropTypes.string.isRequired,
};

export default ReceiveDoneItemCard;
