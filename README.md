# NewsRabbit - News App

NewsRabbit is a dynamic news application that delivers the latest headlines across various categories by integrating the **NewsAPI**. This project is designed to explore and understand API integration, handling endpoints, headers, and improving user experience with React.

## Features

- **Category-Based News** – Fetch and display news based on user-selected categories.
- **Pagination** – Seamless navigation through news articles.
- **Loading Indicator** – Custom spinner while fetching the next set of news.
- **API Integration** – Utilizes different headers and parameters from NewsAPI.

## Technologies Used

- **React.js** (Developed with `create-react-app`)
- **Bootstrap** (For responsive UI design)
- **NewsAPI** (For fetching real-time news updates)

## Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/newsrabbit.git
   cd newsrabbit
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up API key**:
   - Create a `.env.local` file in the root directory.
   - Add the following line:
     ```sh
     REACT_APP_NEWS_API_KEY=your_api_key_here
     ```

4. **Run the app**:
   ```sh
   npm start
   ```

## Usage
- Select a category to view relevant news articles.
- Navigate through pages using pagination.
- Wait for the spinner to load when fetching new articles.
