import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonPost() {
  return (
    <Card sx={{ margin: 5, width: "70%" }}>
      <CardHeader
        avatar={
            <Skeleton animation="wave" variant="circular" width={40} height={40} />          
        }
        action={null}
        title={
            <Skeleton
              animation="wave"
              height={10}
              width="40%"
              style={{ marginBottom: 6 }}
            />
        }
        subheader={
            <Skeleton animation="wave" height={10} width="20%" />
        }
      />
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
      </CardContent>
    </Card>
  );
}