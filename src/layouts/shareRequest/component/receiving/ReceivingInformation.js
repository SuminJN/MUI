import Card from "@mui/material/Card";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import ReceivingItemCard from "./ReceivingItemCard";
import axiosInstance from "../../../../apis/axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

function ReceivingInformation() {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    axiosInstance.get("/api/history/receiving").then((res) => {
      setItemList(res.data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Card>
          <MDBox pt={3} px={2}>
            <MDTypography variant="h6" fontWeight="medium">
              신청 대기 중
            </MDTypography>
          </MDBox>
          <MDBox pt={1} pb={2} px={2}>
            <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
              {itemList === null
                ? null
                : itemList.map((item, idx) => (
                    <ReceivingItemCard
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

export default ReceivingInformation;
