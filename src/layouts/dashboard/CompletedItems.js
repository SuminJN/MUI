import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import ItemCard from "../../components/ItemCard";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import axiosInstance from "../../apis/axios";

function CompletedItems() {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    axiosInstance.get("/api/items").then((res) => {
      setItemList(res.data.filter((item) => item.isFinished === true));
      console.log(res.data);
    });
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Card>
          <MDBox pt={2} pb={2} px={2}>
            <Grid container spacing={2}>
              {itemList === null
                ? null
                : itemList.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}>
                      <ItemCard
                        itemId={item.itemId}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        createdTime={item.createdTime}
                        route={`/share-history/${item.itemId}`}
                      />
                    </Grid>
                  ))}
            </Grid>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CompletedItems;
