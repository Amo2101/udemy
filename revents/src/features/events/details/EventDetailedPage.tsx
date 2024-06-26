import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";


export default function EventDetailedPage() {
  return (
    <Grid>
      <Grid.Column width={10}>
<EventDetailedHeader></EventDetailedHeader>
<EventDetailedInfo></EventDetailedInfo>
<EventDetailedChat></EventDetailedChat>
      </Grid.Column>

      <Grid.Column width={6}>
<EventDetailedSidebar></EventDetailedSidebar>
      </Grid.Column>
    </Grid>
  )
}
