import { Button } from "./Button";
import { Container } from "./Container";

export const GroupButtons = ({
  handleRemoveAllTasks,
  handleResetToInitial,
  handleMarkAllIncomplete,
  handleMarkAllComplete,
}) => {
  return (
    <Container styleContainer="mt-5">
      <Button
        onClick={handleMarkAllComplete}
        className="btn-primary w-100 mt-2"
      >
        Mark all as completed
      </Button>
      <Button
        onClick={handleMarkAllIncomplete}
        className="btn-primary w-100 mt-2"
      >
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} className="btn-primary w-100 mt-2">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllTasks} className="btn-primary w-100 mt-2">
        Remove all items
      </Button>
    </Container>
  );
};
