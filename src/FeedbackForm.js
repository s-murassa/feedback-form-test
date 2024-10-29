import "./App.css";
import { useState } from "react";

const FeedbackForm = ({onSubmit}) => { 
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");
    
    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
        ? "Please provide the comment explaining why the experience was not good. Minimum length is 10 characters"
        : "Optional Feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
    };
    
    return (
        <div className= "App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className= "Field">
                        <label htmlFor="score">Score: {score} </label>
                        <input
                            id="score"
                            value={score}
                            onChange={e => { 
                                setScore(e.target.value);
                            }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div className= "Field">
                        <label htmlFor="comment">Comments: </label>
                        <textarea
                            id="comment"
                            placeholder={textAreaPlaceholder}
                            name="comment"
                            value={comment}
                            onChange={e => { 
                                setComment(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit" disabled={isDisabled}>
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default FeedbackForm;