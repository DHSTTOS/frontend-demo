import React, { Component } from "react";
import styled from "@emotion/styled";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  flex: 1;
  align-self: flex-start;
  margin: 0 1rem;
`;

const PaperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 10rem;
`;

export default class GlobalFilters extends Component {
  render() {
    return (
      <Container>
        <Paper elevation={1}>
          <PaperContent>
            <Typography variant="subheading" component="h3">
              Global Filters
            </Typography>
          </PaperContent>
        </Paper>
      </Container>
    );
  }
}
