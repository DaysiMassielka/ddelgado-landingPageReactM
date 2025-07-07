import { Card, Button, CardMedia, CardContent, Typography, CardActions } from '@mui/material';


export const BasicCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image='https://cdn.pixabay.com/photo/2016/08/18/02/07/landscape-1602015_960_720.jpg'
                title="place-Hold"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained"
                    sx={{ backgroundColor: '#1976d2', color: '#fff' }}
                >
                    Find out More
                </Button>
            </CardActions>
        </Card>
    );
}