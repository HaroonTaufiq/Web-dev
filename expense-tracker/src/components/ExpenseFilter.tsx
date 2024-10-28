import categoryOptions from './categories';

interface Props {
    onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select 
      className="form-select mb-5" 
      onChange={(e) => onSelectCategory(e.target.value)}
      aria-label="Select expense category"
    >
      <option value="All">All categories</option>
      {categoryOptions.map((category) => <option key={category} value={category}>{category}</option>)}
    </select> 
  )
}
