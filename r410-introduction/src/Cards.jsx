import React, {useState, useEffect} from "react";
import FoldableCard from "./FoldableCard"
import PropTypes from "prop-types"

function Cards(props) {
  const { cardsData } = props;
  const [openedIndex, setOpenedIndex] = useState();
  const [foldableCards, setFoldableCards] = useState([]);
  useEffect(() => {
    setFoldableCards(
      cardsData.map((data, index) => (
        <FoldableCard
          key={data.id}
          title={data.title}
          opened={openedIndex === index}
          onToggleOpened={(isShown) => isShown && setOpenedIndex(index)}
        >
          {data.content}
        </FoldableCard>
      ))
    );
  }, [cardsData, openedIndex]);
  return <div className="cards">{foldableCards}</div>;
}

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Cards;

