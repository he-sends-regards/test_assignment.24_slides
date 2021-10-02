import { childrens } from '../../mocks/childrens';
import { countChildrenValues } from '../../utils';
import './style.css';

export default function ChildrenAmount() {
  return (
    <div className="children_amount-container">
      <span>
        Amount of all children&apos;s values: <strong>{countChildrenValues(childrens)}</strong>
      </span>
    </div>
  );
}
