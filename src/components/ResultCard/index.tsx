import './styles.css';

type Props = {
  title: string;
  description: string;
};

const isHttp = (description: String) => {
  return String(description).startsWith('http');
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="result-container base-info-card">
      <h3 className="result-title">{title}</h3>
      {isHttp(description) ? (
        <a href={description} className="result-description">
          {description}
        </a>
      ) : (
        <p className="result-description">{description}</p>
      )}
    </div>
  );
};

export default ResultCard;
