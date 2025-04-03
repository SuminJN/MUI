/**
 =========================================================
 * Material Dashboard 2 React - v2.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import DefaultItemCard from "../../examples/Cards/ItemCards/DefaultItemCard";
import axiosInstance from "../../apis/axios";
import { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import MDButton from "../../components/MDButton";
import MDInput from "../../components/MDInput";
import { Link } from "react-router-dom";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    axiosInstance.get("/api/items").then((res) => {
      setItemList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} display="flex" justifyContent="flex-end">
        {/*<MDBox pr={1}>*/}
        {/*  <MDInput label="검색어를 입력해주세요" />*/}
        {/*</MDBox>*/}
        <MDButton component={Link} to="/addItem" variant="gradient" color="info">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;나눔하기
        </MDButton>
      </MDBox>
      <MDBox py={2}>
        <Grid container spacing={2}>
          {itemList !== null
            ? itemList.map((item, index) => (
                <Grid key={index} item xs={12} md={6} xl={3}>
                  <DefaultItemCard
                    image={item.image}
                    label={item.category}
                    title={item.title}
                    description={item.description}
                    action={{
                      type: "internal",
                      route: `/home/${item.itemId}`,
                      color: "info",
                      label: "자세히 보기",
                    }}
                    createdTime={item.createdTime}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </MDBox>
      {/*<MDBox py={3}>*/}
      {/*  <Grid container spacing={3}>*/}
      {/*    <Grid item xs={12} md={6} lg={3}>*/}
      {/*      <MDBox mb={1.5}>*/}
      {/*        <ComplexStatisticsCard*/}
      {/*          color="dark"*/}
      {/*          icon="weekend"*/}
      {/*          title="Bookings"*/}
      {/*          count={281}*/}
      {/*          percentage={{*/}
      {/*            color: "success",*/}
      {/*            amount: "+55%",*/}
      {/*            label: "than lask week",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </MDBox>*/}
      {/*    </Grid>*/}
      {/*    <Grid item xs={12} md={6} lg={3}>*/}
      {/*      <MDBox mb={1.5}>*/}
      {/*        <ComplexStatisticsCard*/}
      {/*          icon="leaderboard"*/}
      {/*          title="Today's Users"*/}
      {/*          count="2,300"*/}
      {/*          percentage={{*/}
      {/*            color: "success",*/}
      {/*            amount: "+3%",*/}
      {/*            label: "than last month",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </MDBox>*/}
      {/*    </Grid>*/}
      {/*    <Grid item xs={12} md={6} lg={3}>*/}
      {/*      <MDBox mb={1.5}>*/}
      {/*        <ComplexStatisticsCard*/}
      {/*          color="success"*/}
      {/*          icon="store"*/}
      {/*          title="Revenue"*/}
      {/*          count="34k"*/}
      {/*          percentage={{*/}
      {/*            color: "success",*/}
      {/*            amount: "+1%",*/}
      {/*            label: "than yesterday",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </MDBox>*/}
      {/*    </Grid>*/}
      {/*    <Grid item xs={12} md={6} lg={3}>*/}
      {/*      <MDBox mb={1.5}>*/}
      {/*        <ComplexStatisticsCard*/}
      {/*          color="primary"*/}
      {/*          icon="person_add"*/}
      {/*          title="Followers"*/}
      {/*          count="+91"*/}
      {/*          percentage={{*/}
      {/*            color: "success",*/}
      {/*            amount: "",*/}
      {/*            label: "Just updated",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </MDBox>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}

      {/*  <MDBox mt={4.5}>*/}
      {/*    <Grid container spacing={3}>*/}
      {/*      <Grid item xs={12} md={6} lg={4}>*/}
      {/*        <MDBox mb={3}>*/}
      {/*          <ReportsBarChart*/}
      {/*            color="info"*/}
      {/*            title="website views"*/}
      {/*            description="Last Campaign Performance"*/}
      {/*            date="campaign sent 2 days ago"*/}
      {/*            chart={reportsBarChartData}*/}
      {/*          />*/}
      {/*        </MDBox>*/}
      {/*      </Grid>*/}
      {/*      <Grid item xs={12} md={6} lg={4}>*/}
      {/*        <MDBox mb={3}>*/}
      {/*          <ReportsLineChart*/}
      {/*            color="success"*/}
      {/*            title="daily sales"*/}
      {/*            description={*/}
      {/*              <>*/}
      {/*                (<strong>+15%</strong>) increase in today sales.*/}
      {/*              </>*/}
      {/*            }*/}
      {/*            date="updated 4 min ago"*/}
      {/*            chart={sales}*/}
      {/*          />*/}
      {/*        </MDBox>*/}
      {/*      </Grid>*/}
      {/*      <Grid item xs={12} md={6} lg={4}>*/}
      {/*        <MDBox mb={3}>*/}
      {/*          <ReportsLineChart*/}
      {/*            color="dark"*/}
      {/*            title="completed tasks"*/}
      {/*            description="Last Campaign Performance"*/}
      {/*            date="just updated"*/}
      {/*            chart={tasks}*/}
      {/*          />*/}
      {/*        </MDBox>*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </MDBox>*/}

      {/*  <MDBox>*/}
      {/*    <Grid container spacing={3}>*/}
      {/*      <Grid item xs={12} md={6} lg={8}>*/}
      {/*        <Projects />*/}
      {/*      </Grid>*/}
      {/*      <Grid item xs={12} md={6} lg={4}>*/}
      {/*        <OrdersOverview />*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </MDBox>*/}
      {/*</MDBox>*/}
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
