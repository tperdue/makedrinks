import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShowRecipe from '../../alerts-dialogs/show-recipe';
import { connect } from 'react-redux';


const useCardStyles = makeStyles(theme => ({

    avatar: {
        backgroundColor: theme.palette.primary.light
    },
    media: {
        height: "40vh",

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
    },

    root: {

        marginBottom: "1rem",


    },

    body1: {

        display: "flex",
        flexWrap: "wrap",
        marginTop: ".5rem",
        maxWidth: "22vw",
        minHeight: "10vw",
        paddingLeft: "1rem",
        [theme.breakpoints.down('sm')]: {

            maxWidth: "65vw"
        }




    }
}))

const useCardContentStyles = makeStyles(theme => ({
    root: {
        paddingTop: ".5rem"
    },
    inside: {

        marginRight: "1rem",
        marginLeft: "1rem"
    }
}))


const RecipeCard = (props) => {

    const { recipeInfo } = props;
    const cardCss = useCardStyles();
    const cardContentCss = useCardContentStyles();
    const createAvatar = (recipeInfo) => {
        return (
            <Avatar
                aria-label="recipe"
                className={cardCss.avatar}

            >{recipeInfo.name[0]}</Avatar>
        )
    }



    return (

        <div className={'flip-card'}>
            <div className="flip-card-inner">

                <div className={`flip-card-front`}>

                    <Card className={cardCss.root}>
                        <CardHeader

                            avatar={createAvatar(recipeInfo)}
                            title={recipeInfo.name}
                            subheader={recipeInfo.category}


                        >

                        </CardHeader>
                        <CardMedia
                            image={recipeInfo.thumbNail}
                            title={recipeInfo.name}
                            className={cardCss.media}
                        ></CardMedia>
                        <CardContent className={cardContentCss.root}>
                            <span className={cardContentCss.inside}>
                                Ingredients:

                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    component="p"
                                    className={cardCss.body1}

                                >
                                    {recipeInfo.ingredients.join(',')}
                                </Typography>
                            </span>

                        </CardContent>

                        <CardActions disableSpacing>

                            <ShowRecipe recipeInfo={recipeInfo} open={false} />

                        </CardActions>
                    </Card>
                </div>











            </div>
        </div>


    )
}


const mapStateToProps = (state, ownProps) => {

    const { recipeInfo } = ownProps;

    return {
        recipeInfo
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
