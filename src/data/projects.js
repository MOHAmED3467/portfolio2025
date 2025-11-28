// ========= Fetch GitHub Projects + Custom Thumbnails ========= //

export async function fetchGitHubProjects() {
  try {
    const res = await fetch("https://api.github.com/users/MOHAmED3467/repos");
    const data = await res.json();

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      url: repo.html_url,
      demo: null, // تقدر تضيف Demo links لو حبيت
      image: getProjectImage(repo.name), // thumbnail
    }));
  } catch (err) {
    console.error("GitHub API Error:", err);
    return [];
  }
}

// ========= Images for Each Project ========= //

function getProjectImage(name) {
  const images = {
    "portfolio2025": new URL("../assets/projects/portfolio.jpg", import.meta.url).href,
    "vue-shop": new URL("../assets/projects/vue-shop.jpg", import.meta.url).href,
    "news-app-flutter": new URL("../assets/projects/flutter-news.jpg", import.meta.url).href,
    "doctor": new URL("../assets/projects/doctor.jpg", import.meta.url).href,
  };

  return images[name] || new URL("../assets/projects/default.jpg", import.meta.url).href;
}
