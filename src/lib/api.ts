// API utility functions for frontend-backend communication

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

// Contact Form Submission
export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to send message')
  }

  return response.json()
}

// Newsletter Subscription
export async function subscribeToNewsletter(email: string) {
  const response = await fetch(`${API_URL}/api/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to subscribe')
  }

  return response.json()
}

// Fetch Projects
export async function fetchProjects() {
  const response = await fetch(`${API_URL}/api/projects`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  return response.json()
}

// Fetch Skills
export async function fetchSkills() {
  const response = await fetch(`${API_URL}/api/skills`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch skills')
  }

  return response.json()
}

// Fetch Experience
export async function fetchExperience() {
  const response = await fetch(`${API_URL}/api/experience`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch experience')
  }

  return response.json()
}

// Fetch Testimonials
export async function fetchTestimonials() {
  const response = await fetch(`${API_URL}/api/testimonials`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials')
  }

  return response.json()
}

// Fetch Blog Posts
export async function fetchBlogPosts() {
  const response = await fetch(`${API_URL}/api/blog`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts')
  }

  return response.json()
}

// Increment Blog Post Views
export async function incrementBlogViews(slug: string) {
  const response = await fetch(`${API_URL}/api/blog/${slug}/view`, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('Failed to increment views')
  }

  return response.json()
}

// Admin Authentication
export async function adminLogin(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Login failed')
  }

  return response.json()
}

// Admin API calls with authentication
function getAuthHeaders() {
  const token = localStorage.getItem('adminToken')
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

// Admin - Create Project
export async function createProject(data: any) {
  const response = await fetch(`${API_URL}/api/projects`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to create project')
  }

  return response.json()
}

// Admin - Update Project
export async function updateProject(id: string, data: any) {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to update project')
  }

  return response.json()
}

// Admin - Delete Project
export async function deleteProject(id: string) {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to delete project')
  }

  return response.json()
}
