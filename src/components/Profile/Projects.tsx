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
import { card } from "../../pages/profile";
import { Movecard } from "../Layout/Movecard";

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
    <Movecard lt={40} lb={50} rt={60} rb={70}>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          paddingBottom: 20,
          fontStyle: "italic",
          fontFamily: "arial",
        }}
      >
        <Typography variant="h3" style={{ margin: 10 }}>
          Projects
        </Typography>
        <Grid
          container
          style={{
            flexGrow: 1,
            marginTop: 10,
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
    </Movecard>
  );
};
