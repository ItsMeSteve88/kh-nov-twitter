import React from "react";
import { useState } from "react";
import "./NewTweet.css";

function NewTweet(props) {
  const [tweet, setTweet] = useState("");
  function handleTweetChange(event) {
    setTweet(event.target.value);
    }
    function handleTweetPost(event)
    {
        props.notifyNewTweet(tweet);
        console.log(tweet);
    }

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <textarea
              value={tweet}
              onChange={handleTweetChange}
              placeholder="What's Happening!"
              className="tweet-box"
            ></textarea>
            <div className="reply">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
              <a>Everyone can reply</a>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={handleTweetPost} data-bs-dismiss="modal" type="button" className="btn-tweet btn-form">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTweet;
