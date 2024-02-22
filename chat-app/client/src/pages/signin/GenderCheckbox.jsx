

export const GenderCheckbox = () => {
  return (
    <div className="flex mt-2 mx-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <input type="checkbox" className="checkbox border-[#3a86ff]" />
          <span className="label-text">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <input type="checkbox" className="checkbox border-[#3a86ff]" />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
}
