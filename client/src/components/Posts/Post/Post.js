import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      
      <div className={classes.overlay}>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).toLocaleString()}</Typography>
      </div>
      
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <Typography className={classes.title} variant='h5' >{post.title}</Typography>
      
      <CardContent >
        <div className='msg'> {post.message} </div>
      </CardContent>
      
      <CardActions className={classes.cardActions}>
        
        <Button size="small" color="secondary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> {post.likeCount} </Button>
        <Button size="small" default onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /></Button>
      </CardActions>

    </Card>
  );
};

export default Post;
