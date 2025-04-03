import Card from "@mui/material/Card";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import SharingItemCard from "./SharingItemCard";
import axiosInstance from "../../../../apis/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

function SharingInformation() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState(null);
  const [open, setOpen] = useState(false);
  const [applicantList, setApplicantList] = useState([]);

  const getApplicant = (itemId) => {
    setOpen(true);
    axiosInstance.get(`/api/history/${itemId}`).then((res) => {
      setApplicantList(res.data);
    });
    console.log(applicantList);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axiosInstance.get("/api/items/shared", { params: { done: false } }).then((res) => {
      setItemList(res.data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        <Card>
          <MDBox pt={3} px={2}>
            <MDTypography variant="h6" fontWeight="medium">
              나눔 중인 물건
            </MDTypography>
          </MDBox>
          <MDBox pt={1} pb={2} px={2}>
            <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
              {itemList === null
                ? null
                : itemList.map((item, idx) => (
                    <SharingItemCard
                      key={idx}
                      itemId={item.itemId}
                      title={item.title}
                      description={item.description}
                      category={item.category}
                      image={item.image}
                      createdTime={item.createdTime}
                    />
                  ))}
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SharingInformation;
