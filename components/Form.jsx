import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc max-w-md">
        {type} and share amazing prompt with the world...
      </p>
      <form
        onSubmit={handleSubmit}
        className="m-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-shatoshi font-bold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            required
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-shatoshi font-bold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">(#product, #idea, #webdevelopment)</span>
          </span>
          <input
            required
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5  gap-4">
          <Link href="/" className="text-grasy-500 text-sm">
            Cancel
          </Link>
          <button className="px-5 py-1.5 text-sm  bg-primary-orange rounded-full  text-white" disabled={submitting} type="submit">
            {submitting? `${type}...`: type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
