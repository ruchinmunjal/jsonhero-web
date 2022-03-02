import { DragAndDropForm } from "./DragAndDropForm";
import { Title } from "./Primitives/Title";
import { SampleUrls } from "./SampleUrls";
import { UrlForm } from "./UrlForm";

export function NewFile() {
  return (
    <div>
      <div className="mb-4">
        <UrlForm />
      </div>
      <DragAndDropForm />

      <div className="mt-4 pt-5">
        <Title className="text-slate-400">No JSON? Try it out:</Title>
        <SampleUrls />
      </div>
    </div>
  );
}