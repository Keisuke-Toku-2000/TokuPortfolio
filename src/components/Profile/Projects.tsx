import { Button, Card } from "@material-ui/core";
import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { VFC } from "react";
import { useDialog } from "../hooks/useDialog";
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
          {data.allMicrocmsBlogWithPicture.edges.map((item, i) => {
            const { isOpen, close, open } = useDialog();
            return (
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
                <CardActions disableSpacing={false}>
                  <Button size="small" onClick={open}>
                    Open
                  </Button>
                </CardActions>
                {isOpen && <ProjectModal close={close} projectDetail={item} />}
              </Card>
            );
          })}
        </Grid>
      </div>
    </BGCard>
  );
};

type ProjectModalProps = {
  close: () => void;
  // TODO: TSの型を自動生成にして対応させる。
  projectDetail: any;
};

const ProjectModal: VFC<ProjectModalProps> = ({ close, projectDetail }) => {
  console.log(projectDetail);
  return (
    <Dialog open onClose={close}>
      <DialogContent>
        <div dangerouslySetInnerHTML={{ __html: projectDetail.node.body }} />
      </DialogContent>
    </Dialog>
  );
};
