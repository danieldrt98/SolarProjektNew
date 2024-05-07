import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import "../index.css";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Nach Stadt suchen..."
          variant="filled"
          onChange={(event) => onSearch(event.target.value)}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
