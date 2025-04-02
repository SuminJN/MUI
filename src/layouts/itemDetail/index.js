import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import axiosInstance from "../../apis/axios";
import { useNavigate, useParams } from "react-router-dom";
import MDTypography from "../../components/MDTypography";
import { ImageList, ImageListItem } from "@mui/material";

function ItemDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    id: "",
    title: "",
    description: "",
    viewCount: 0,
    category: "",
    createdAt: "",
    wishCount: 0,
    images: [],
    isOwner: null,
  });

  const handleItemDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await axiosInstance.delete(`/api/item/${itemId}`);
        console.log("아이템 삭제 성공: ", response);
        alert("물건이 삭제되었습니다.");
        navigate("/items");
      } catch (e) {
        console.log("아이템 삭제 실패: ", e);
      }
    }
  };

  const handleItemApply = () => {
    axiosInstance.post("/api/history", { itemId: itemId }).then((r) => {
      alert("신청되었습니다.");
      navigate("/items");
    });
  };

  const handleAddWish = () => {
    axiosInstance.post("/api/wish", { itemId: itemId }).then((r) => {
      alert("위시 리시트에 등록되었습니다.");
    });
  };

  useEffect(() => {
    axiosInstance.get(`/api/item/${itemId}`).then((res) => {
      setItem(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox mt={3} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">{item.title}</MDTypography>
                <MDBox mt={2}>
                  <Grid container spacing={2}>
                    {item &&
                      item.images.map((image, index) => (
                        <Grid item key={index}>
                          <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            alt="image"
                            loading="lazy"
                          />
                        </Grid>
                      ))}
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ItemDetail;
