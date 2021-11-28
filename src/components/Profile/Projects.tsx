import { Button, Card } from "@material-ui/core";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { VFC } from "react";
import { BGCard } from "../Layout/BGCard";

export const Projects: VFC = () => {
  const data = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query MyQuery {
      allMicrocmsBlogWithPicture {
        edges {
          node {
            blogWithPictureId
            body
            id
            title
            type
            picture {
              url
              height
              width
            }
          }
        }
      }
    }
  `);

  return (
    <BGCard>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          paddingBottom: 20,
          fontFamily: "arial",
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontFamily: "arial",
            color: "#FFFFFF",
            textDecoration: "underline",
          }}
        >
          Projects
        </Typography>
        <Grid
          container
          style={{
            flexGrow: 1,
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          {data.allMicrocmsBlogWithPicture.edges.map((item, i) => (
            <Card style={{ height: 400, width: 275, margin: 10 }} key={i}>
              <CardMedia
                component="img"
                image={item.node.picture?.url}
                style={{ height: 275 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.node.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </div>
    </BGCard>
  );
};
