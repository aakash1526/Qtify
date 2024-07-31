/*import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
});

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputProps,
    value,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
                key={option.title}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;*/

import React from 'react';
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = ({ placeholder, searchData }) => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input 
          className={styles.search} 
          placeholder={placeholder} 
          onChange={(e) => searchData(e.target.value)}
        />
        <div>
          <button className={styles.searchButton} type='submit'>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
