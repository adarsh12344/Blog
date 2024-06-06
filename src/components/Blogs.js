// Blogs.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <Typography variant="body1">No Post Found</Typography>
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1">
                By <strong>{post.author}</strong> on <em>{post.category}</em>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Posted on {post.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {post.content}
              </Typography>
              <div>
                {post.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component="span"
                    sx={{ color: "blue", marginRight: 1 }}
                  >
                    #{tag}
                  </Typography>
                ))}
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}
