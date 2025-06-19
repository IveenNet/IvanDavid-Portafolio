import { myEducation } from '../constans';

const Education = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Education</h3>

      <div className="education-container">
        {myEducation.map((item) => (
          <div
            key={`review-${item.id}`}
            className="education-review p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-900"
          >
            <div className="mb-4">
              <p className="text-xl font-bold text-gray-100">{item.college}</p>
              <p className="text-lg font-semibold text-gray-300">
                {item.degree}
              </p>
              <p className="text-sm text-gray-400 mt-2">{item.review}</p>
            </div>

            <div className="education-content flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-white p-2 rounded-full">
                  <img
                    src={item.logo}
                    alt={`${item.college} logo`}
                    className="w-14 h-14 rounded-full shadow-md"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-semibold text-gray-100">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400">{item.position}</p>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p>{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
