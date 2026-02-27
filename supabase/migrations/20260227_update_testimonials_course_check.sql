-- Update testimonials.course check constraint to allow all Course Category values
-- (cookery, business, fitness, hr, project, health) + backward compat (cookery&hospitality)

ALTER TABLE testimonials
  DROP CONSTRAINT IF EXISTS testimonials_course_check;

ALTER TABLE testimonials
  ADD CONSTRAINT testimonials_course_check CHECK (
    course IN (
      'cookery',
      'business',
      'fitness',
      'hr',
      'project',
      'health',
      'cookery&hospitality'
    )
  );
