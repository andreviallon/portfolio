import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface StackListProps {
  text: string;
  icon: IconDefinition;
  stackList: string[];
}

const StackList = ({ text, icon, stackList }: StackListProps) => {
  const isLast = (array: string[], index: number): boolean =>
    array.length !== index + 1;

  return (
    <div className="stack-list flex items-center">
      <div className="flex justify-center w-8">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>{text}:</span>
      <ul className="ml-1">
        {stackList.map((stackItem, index) => (
          <span key={stackItem}>
            {stackItem}
            {isLast(stackList, index) ? ", " : ""}{" "}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default StackList;
