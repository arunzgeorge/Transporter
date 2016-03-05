package com.Transporter.Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SingUpServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		doWork(request, response);
	}
	
	public void  doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		doWork(request, response);
	}
	
	private void doWork(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String name = request.getParameter("name");
		PrintWriter pw = response.getWriter();
		if(name.equalsIgnoreCase("t")) {
			pw.write("a");
		} else {
			pw.write("b");
		}
	}

}
