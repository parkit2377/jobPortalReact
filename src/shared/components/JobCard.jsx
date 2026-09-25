import React from 'react'
import Button from './Button'
import { dateFormatter } from '../utls/utils';

export default function JobCard({ details }) {
  return (
    <div
      className="
        group
        relative
        w-full
        rounded-2xl
        border
        border-white/10
        bg-[#15191f]
        p-5
        text-white
        shadow-lg
        shadow-black/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-[#181d24]
        hover:shadow-xl
        hover:shadow-blue-500/5
      "
    >
      {/* Top section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        {/* Job information */}
        <div className="min-w-0">
          <h2 className="
            text-xl
            font-semibold
            tracking-tight
            text-white
            transition-colors
            group-hover:text-blue-400
          ">
            {details?.title}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {details?.recruiterId?.companyName}
          </p>
        </div>

        {/* Salary */}
        <div className="
          shrink-0
          rounded-xl
          border
          border-blue-500/20
          bg-blue-500/10
          px-3
          py-2
        ">
          <p className="text-sm font-semibold text-blue-400">
            {details?.salary?.currency}{" "}
            {details?.salary?.min} - {details?.salary?.max}
          </p>
        </div>
      </div>

      {/* Job metadata */}
      <div className="
        mt-5
        flex
        flex-wrap
        items-center
        gap-x-5
        gap-y-2
        text-sm
        text-gray-400
      ">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-briefcase text-blue-400"></i>
          <span>{details?.yearOfExp}</span>
        </div>

        <div className="hidden sm:block text-gray-700">
          |
        </div>

        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-crosshairs text-blue-400"></i>
          <span>{details?.location}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-white/5"></div>

      {/* Description */}
      <div>
        <p className="
          text-sm
          leading-6
          text-gray-400
          line-clamp-3
        ">
          {details?.description}
        </p>
      </div>

      {/* Skills */}
      {details?.keySkills?.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            Key Skills
          </p>

          <div className="flex flex-wrap gap-2">
            {details.keySkills.map((skill, index) => (
              <span
                key={index}
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-[#0f1318]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:border-blue-500/30
                  hover:text-blue-400
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom section */}
      <div className="
        mt-6
        flex
        flex-col-reverse
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      ">

        {/* Posted date */}
        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
        ">
          <i className="fa-regular fa-calendar-days"></i>
          <span>{dateFormatter(details?.createdAt)}</span>
        </div>

        {/* Apply button */}
        <Button
          color="#2A78D6"
          type="button"
          border="0"
          size="sm"
        >
          <span className="flex items-center gap-2">
            Apply Job
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </span>
        </Button>
      </div>
    </div>
  );
}
