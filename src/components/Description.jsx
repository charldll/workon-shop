
import { useState} from "react";

const Description = ({ image = null, attributes = [], children }) => {
  const [showImage, setShowImage] = useState(false);

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			gap: "15px",
			justifyContent: "center",
			alignItems: "center"
			}}>
      <p>{children}</p>
			{attributes.length > 0 && (
				<>
					{attributes.map((attribute, index) => {
						return <p 
							key={attribute}
							style={{ color: index === 1 ? "red" : "white"}}
						>{attribute}</p>
					})}
				</>
			)}

			{image && (
				<>
					<button onClick = {() => setShowImage(!showImage)}>
						{showImage ? "Hide image" : "Show image"}
					</button>
					{showImage && <img src = {image}/>}
				</>
			)}

			</div>
	)
}

export default Description;