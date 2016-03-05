package com.Transporter.Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		doWork(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		doWork(request, response);
	}
	
	public void doWork(HttpServletRequest request, HttpServletResponse response) throws IOException {
		PrintWriter pw = response.getWriter();
		String username = request.getParameter("uname");
		String password = request.getParameter("passwd");
		/* Login should use DB to check */ 
		if(username != null && password != null) {
			if(username.equalsIgnoreCase("a@a.com") && password.equalsIgnoreCase("123")) {
				pw.write("true");
			} else {
				pw.write("false");
			}
		} else {
			pw.write("false");
		}
	}
	
}
