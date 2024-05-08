'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/demo/components/container/PageContainer';
// components
import SalesOverview from '@/app/demo/components/dashboard/SalesOverview';
import DailyActivity from '@/app/demo/components/dashboard/DailyActivity';
import ProductPerformance from '@/app/demo/components/dashboard/ProductPerformance';
import BlogCard from '@/app/demo/components/dashboard/Blog';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={4}>
          <DailyActivity />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={12}>
          <BlogCard />
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
